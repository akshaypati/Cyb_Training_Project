module.exports = (sequelize, DataTypes) => {
    const events = sequelize.define("event_details", {
        event_id: {
            type: DataTypes.INTEGER,

            autoIncrement: true,

            allowNull: false,

            primaryKey: true
        },
        event_desc: {
            type: DataTypes.STRING,
            allowNull: false
        },
        artist_id:{
            type: DataTypes.INTEGER
        }

    },{ timestamps: false })

    return events
}
