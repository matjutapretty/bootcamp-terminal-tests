module.exports = function isFromBellville(itemName) {
    if (itemName.startsWith("CY")) {
        return true;
    }
    return false;
}