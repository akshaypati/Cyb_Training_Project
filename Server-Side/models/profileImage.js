module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define("imgprof", {

        img_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        
        image: {
            type: DataTypes.STRING
        },
        artist_id:{
            type: DataTypes.INTEGER
        }
    },{ timestamps: false })
    
    return Image;
}
