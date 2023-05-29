var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyqeqOpgiyzfCnBF'}).base('appiShYj9Ll6xHuYv');

const getItems = (baseName) => {
  const table = base(baseName)
  return async () => {
    const records = await table.select().firstPage()
    const list = records.map((x) => {return x.fields})
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
  return async ()=> {
    base( baseName ).create([ ...data2.slice(20,28)], (err, records) => {
      if (err) { console.error(err); return; }
      records.forEach( record => console.log(record.getId()) )
      console.log('done')
    })
  }
}
// const data = {
  // fields: { Name: 'test', Affiliation: 'rec0OKXhDfkLVAJsX'},
// }
const data2 =[
  {
    fields: {
      Affiliation: 'Academy',
      Orientation: 'Academy',
      Element: 'Earth',
      Specialisation: 'Tank,Disruptor',
      Name: 'Syla'
    }
  },
  {
    fields: {
      Affiliation: 'Scholars',
      Orientation: 'Academy',
      Element: 'Order,Chaos',
      Specialisation: 'Group leader,Taker,Giver,Invoker',
      Name: 'Arthur Dean'
    }
  },
  {
    fields: {
      Affiliation: 'Ashen Family',
      Orientation: 'Noble',
      Element: 'Fire,Order',
      Specialisation: '',
      Name: 'King'
    }
  },
  {
    fields: {
      Affiliation: "Mercs,Toph's Family",
      Orientation: 'Misfits',
      Element: 'Earth',
      Specialisation: 'Group leader,DPS',
      Name: "Toph's dauther 1"
    }
  },
  {
    fields: {
      Affiliation: 'Scholars,Academy',
      Orientation: 'Academy,Corporation',
      Element: '',
      Specialisation: '',
      Name: 'Lucien’s gf'
    }
  },
  {
    fields: {
      Affiliation: 'Scholars',
      Orientation: 'Academy',
      Element: 'Order',
      Specialisation: 'Disruptor',
      Name: 'The master'
    }
  },
  {
    fields: {
      Affiliation: '',
      Orientation: 'Noble,Corporation',
      Element: 'Fire',
      Specialisation: 'Group leader,Taker',
      Name: 'Toph’s Opponent'
    }
  },
  {
    fields: {
      Affiliation: '',
      Orientation: 'Noble',
      Element: 'Air,Chaos',
      Specialisation: 'Invoker,Disruptor',
      Name: 'Odin'
    }
  },
  {
    fields: {
      Affiliation: 'Academy',
      Orientation: '',
      Element: 'Order,Water',
      Specialisation: 'Group leader,Linker,Disruptor,Giver',
      Name: 'bully'
    }
  },
  {
    fields: {
      Affiliation: 'Scholars',
      Orientation: 'Academy',
      Element: '',
      Specialisation: 'Giver,Linker',
      Name: 'Lucien'
    }
  },
  {
    fields: {
      Affiliation: 'Craftsmen',
      Orientation: 'Corporation',
      Element: 'Water,Chaos',
      Specialisation: 'Group leader,Linker',
      Name: 'Solomon'
    }
  },
  {
    fields: {
      Affiliation: 'Craftsmen',
      Orientation: 'Misfits',
      Element: '',
      Specialisation: 'Invoker',
      Name: 'paticerise'
    }
  },
  {
    fields: {
      Affiliation: 'Academy',
      Orientation: 'Academy,Misfits',
      Element: 'Air,Fire,Water',
      Specialisation: 'Linker,Disruptor,Taker,Giver',
      Name: 'Cendremiaire'
    }
  },
  {
    fields: {
      Affiliation: 'Ashen Family,Academy,Craftsmen',
      Orientation: 'Noble,Army,Academy',
      Element: 'Fire,Chaos',
      Specialisation: 'Linker,Disruptor',
      Name: 'Alexander'
    }
  },
  {
    fields: {
      Affiliation: 'Craftsmen',
      Orientation: 'Corporation',
      Element: 'Fire,Earth',
      Specialisation: '',
      Name: 'Philippa'
    }
  },
  {
    fields: {
      Affiliation: "Toph's Family",
      Orientation: 'Army,Noble',
      Element: 'Earth',
      Specialisation: 'Tank,Group leader',
      Name: "Toph's dauther 2"
    }
  },
  {
    fields: {
      Affiliation: "Toph's Family",
      Orientation: 'Army,Noble',
      Element: 'Water,Earth',
      Specialisation: 'Group leader,Giver',
      Name: "Toph's dauther 3"
    }
  },
  {
    fields: {
      Affiliation: "Toph's Family",
      Orientation: 'Army,Noble',
      Element: 'Earth',
      Specialisation: '',
      Name: "Toph's dauther 4"
    }
  },
  {
    fields: {
      Affiliation: "Toph's Family",
      Orientation: 'Army,Noble',
      Element: 'Earth,Order',
      Specialisation: 'Group leader,Tank',
      Name: 'General Toph'
    }
  },
  {
    fields: {
      Affiliation: 'Scholars,Academy',
      Orientation: 'Academy',
      Element: '',
      Specialisation: 'Taker',
      Name: 'Pauline'
    }
  },
  {
    fields: {
      Affiliation: 'Ashen Family',
      Orientation: 'Noble,Army',
      Element: 'Fire',
      Specialisation: '',
      Name: "Ashe's Cousin"
    }
  },
  {
    fields: {
      Affiliation: 'Ashen Family',
      Orientation: 'Noble,Army',
      Element: 'Fire',
      Specialisation: '',
      Name: "Ashe's dad"
    }
  },
  {
    fields: {
      Affiliation: 'Ashen Family',
      Orientation: 'Noble',
      Element: 'Earth',
      Specialisation: '',
      Name: "Ashe's mom"
    }
  },
  {
    fields: {
      Affiliation: 'Ashen Family,Academy',
      Orientation: 'Noble,Academy,Army',
      Element: 'Earth',
      Specialisation: 'Invoker,Tank,Disruptor',
      Name: 'Ashe'
    }
  },
  {
    fields: {
      Affiliation: '',
      Orientation: 'Corporation',
      Element: '',
      Specialisation: '',
      Name: 'Elise'
    }
  },
  {
    fields: {
      Affiliation: 'Academy',
      Orientation: 'Noble',
      Element: 'Thunder',
      Specialisation: 'Group leader,Taker,Linker',
      Name: 'Anastasia'
    }
  },
  {
    fields: {
      Affiliation: 'Academy',
      Orientation: 'Academy',
      Element: '',
      Specialisation: 'Group leader,Taker',
      Name: 'Malika'
    }
  }
]

const Set = {
  Character      : setItems( 'Character'     ),
}

// Set.Character()
// exports.airtable = {
  // Get, Set 
// }

export {
  Get,Set
}
