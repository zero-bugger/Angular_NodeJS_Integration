

exports.validate = (req,res)=>{

    let events = [
        {
          "_id": "1",
          "name": "Angular: Web Development",
          "description": "2 Days",
          "Teacher": "Krunal Kamble"
        },
        {
          "_id": "2",
          "name": "Python: Machine Learning",
          "description": "2 Days",
          "Teacher": "Krunal Kamble"
        },
        {
          "_id": "3",
          "name": "Machine Learning",
          "description": "2 Days",
          "Teacher": "Krunal Kamble"
        },
        {
          "_id": "4",
          "name": "GoLang",
          "description": "2 Days",
          "Teacher": "Krunal Kamble"
        },
        {
          "_id": "5",
          "name": "IPhone Programming",
          "description": "2 Days",
          "Teacher": "Krunal Kamble"
        },
        {
          "_id": "6",
          "name": "Android Programming",
          "description": "2 Days",
          "Teacher": "Krunal Kamble"
        }
      ]
res.json(events);

}