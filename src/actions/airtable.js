var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyqeqOpgiyzfCnBF'}).base('appiShYj9Ll6xHuYv');

const getItems = (baseName) => {
  const table = base(baseName)
  return async () => {
    const records = await table.select().firstPage()
    const list = records.map((x) => {return {name: x.fields.Name, id: x.getId()}})
    console.log(list)
    return list
  }
}

const Get = {
  Character      : getItems( 'Character'    ),
  Affiliation    : getItems( 'Affiliation'  ),
  Orientation    : getItems( 'Orientation'   ),
  Element        : getItems( 'Element'       ),
  Specialisation : getItems( 'Specialisation')
}

const setItems = (baseName) => { 
  return async (data)=> {


    base( baseName ).create([ ...data], (err, records) => {
      if (err) { console.error(err); return; }
      records.forEach( record => console.log(record.getId()) )
      console.log('done')
    })
  }
}
// const data = {
  // fields: { Name: 'test', Affiliation: ['rec0OKXhDfkLVAJsX']},
// }
// Get.Affiliation()
// .then(x => console.log(x))
// base( "Character" ).create([ data], (err, records) => {
  // if (err) { console.error(err); return; }
  // records.forEach( record => console.log(record.getId()) )
  // console.log('done')
// })

const Set = {
  Character      : setItems( 'Character'     ),
  Affiliation    : setItems( 'Affiliation'   ),
  Orientation    : setItems( 'Orientation'   ),
  Element        : setItems( 'Element'       ),
  Specialisation : setItems( 'Specialisation')
}

export {
  Get, Set 
}
