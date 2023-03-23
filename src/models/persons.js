import {DataTypes} from 'sequelize'
import {sequelize} from '../config/dataBase.js'


export const Person = sequelize.define('Persons',{
    PersonID:{
        type: DataTypes.INTEGER,
    },
    LastName:{
        type: DataTypes.STRING
    },
    FirstName:{
        type: DataTypes.STRING
    },
    Address:{
        type: DataTypes.STRING
    },
    City:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
},{
    timestamps: false
});