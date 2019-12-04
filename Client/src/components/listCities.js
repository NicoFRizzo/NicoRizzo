import React from 'react'

function listCities(item) {
    var listName = <li className="listNoneBullet">{item.name}</li>
    return listName;
}

export default listCities;