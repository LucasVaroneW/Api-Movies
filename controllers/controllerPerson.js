const Person = require ('../database/models/Person')

const controllerPerson = {
    findPerson: async (req, res) => {
        var id = req.params.id
        try {
            const person = await Person.findAll({
                where: { id: id },
                        include: [{ all:true, nested:true }]
            })
            if(person){
                return res.json({person, "consol": console.log('Successful connection')})
            }
            else {
                return res.status(500).json('An error has occurred')
            }
            
        }catch (error) {
            res.status(500).json('An error has occurred, check the parameters')
        }
    }
}

module.exports = controllerPerson;
