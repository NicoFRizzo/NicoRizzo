import React from 'react'

function filterCitiesList(item) {

    for(var i = 1; i < item.length; i += 1) {
        if (item.name.startsWith(filterText) == true) {
            var listName = <li className="listNoneBullet">{item.name}</li>;
        }
      }
    return listName;
}

export default filterCitiesList;