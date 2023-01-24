const dao = require('../dao/nodeDao');

module.exports  = async function getData() {
    return await dao.getData();
}

module.exports  = async function addAudioData(audioObj) {
    return await dao.addAudioData(audioObj);
}

module.exports = async function deleteData(name) {
    return await dao.deleteData(name);
}

module.exports  = async function updateData(old_name,audioObj) {
    return await dao.updateData(old_name,audioObj);
}

module.exports  = async function verifyUser(obj) {
    return await dao.verifyUser(obj);
}
