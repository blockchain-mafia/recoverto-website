import Airtable from 'airtable'
import fs from 'fs'
import dotenv from 'dotenv'

// Set up airtable envs in the development environnement.
if (fs.existsSync('.airtable')) {
  const envConfig = dotenv.parse(
    fs.readFileSync('.airtable')
  )

  for (let k in envConfig) {
    process.env[k] = envConfig[k]
  }
}

const {
  AIRTABLE_API_KEY,
  AIRTABLE_BASE
} = process.env

// TODO: move to the utils folder
const getIDByEmail = (base, email) => {
  return new Promise((resolve, reject) => {
    base('Emailing').select({
      view: 'Grid view',
      filterByFormula: `{Email} = '${email}'`
    }).firstPage((err, records) => {
      if (!records || records.length === 0) resolve(false)
      else records.forEach(record => resolve({
        ID: record['id']
      }))
    })
  })
}

// TODO: use a bot instead of a netlify function to avoid a DDOS attack
exports.handler = async function(event, context, callback) {
  // Only allow POST
  if (event.httpMethod !== "POST")
    return { statusCode: 405, body: "Method Not Allowed" }

  const base = new Airtable({ apiKey: AIRTABLE_API_KEY })
    .base(AIRTABLE_BASE)

  const params = JSON.parse(event.body)
  const email = params.email || ''

  try {
    const emailingID = await getIDByEmail(base, email.toLowerCase())

    if (emailingID)
      base('Emailing').update(emailingID.ID, {
        "Confirmation Email": true
      })
    else
      return {
        statusCode: 200,
        body: JSON.stringify({ result: `Unknown email address` })
      }

    return {
      statusCode: 200,
      body: JSON.stringify({ result: `Data updated.` })
    }
  } catch (err) {
    console.error(err)
    return {
      statusCode: 500,
      body: JSON.stringify({ err })
    }
  }
}
