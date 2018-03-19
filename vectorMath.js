function dotProduct(vector1,vector2){
    return (vector1.x*vector2.x)+(vector1.y*vector2.y)
}
function length(vector) {
    return Math.sqrt(dotProduct(vector,vector))
}
function angle(vector1,vector2){
    return dotProduct(vector1,vector2)/(length(vector1)*length(vector2))
}