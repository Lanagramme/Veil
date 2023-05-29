// import { Client } from "@notionhq/client"
const Client = require('@notionhq/client').Client
// const airtable = require('./airtable.js').airtable


const NOTION_KEY='secret_ICm2ZEkCKunXKggCjSUotvf6KkpXaoSUW65O87Tibg5'
const NOTION_DATABASE_ID='4f98d9034f904034836751bcc32fbac6'

const notion = new Client({ auth: NOTION_KEY })
const databaseId = process.env.NOTION_DATABASE_ID

notion.databases.query({
  database_id: "4f98d9034f904034836751bcc32fbac6",
  filter_properties: ["Name", 'Description']
}).then(x => {
  // console.log(x.results[0])
  const characters = []

  for (let index = 0; index < x.results.length; index++) {
    let char = {
      Affiliation:[],
      Orientation:[],
      Element:[],
      Specialisation:[],
    }
    char.Name = x.results[index].properties.Name.title[0].text.content
    x.results[index].properties.Affiliation.multi_select.map(x => char.Affiliation.push( x.name))
    char.Affiliation = char.Affiliation.join()
    x.results[index].properties.Orientation.multi_select.map(x => char.Orientation.push(x.name))
    char.Orientation = char.Orientation.join()
    x.results[index].properties.Element.multi_select.map(x =>     char.Element.push(x.name))
    char.Element = char.Element.join()
    x.results[index].properties.Specialisation.multi_select.map(x => char.Specialisation.push(x.name))
    char.Specialisation = char.Specialisation.join()
    characters.push({fields: char})
  }

    console.log(characters)
    airtable.Set.Character(characters)
    return

    // console.log(characters)

    const indiv = (field) => {
      //get all and flatten
      let scramble = characters.map(x => x.fields[field])
      scramble = scramble.reduce((previous, current) => {
        return [...previous, ...current]
      }, [])
      const flat = Array.from(new Set(scramble))
      // format
      const format = flat.map(x => { return {fields: {Name: x}}})
      console.log('format', format)

      return format

      // target = characters.reduce((previous, current) => {
          // return [...previous, ...current.fields[field]]
      // }, [])
    }

    // airtable.Get.Orientation()
    // airtable.Set.Orientation(indiv("Orientation"))

  // airtable.Set.Characters(characters.slice( 0,10))
  // airtable.Characters(characters.slice(10,20))
  // airtable.Characters(characters.slice(20,30))
  // airtable.Characters(characters.slice(30,40))
  // console.log(Object.keys(airtable.airtable))
})




