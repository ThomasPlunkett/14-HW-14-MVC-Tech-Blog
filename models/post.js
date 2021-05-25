const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {};

// build out tables (see class video 00:21:40 timestamp for example)