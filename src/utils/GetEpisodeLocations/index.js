const getEpisodeLocations = (episode, locationsByCharacterId) => {
  const { characters } = episode
  const lastSlashIndex = characters[0].lastIndexOf('/') + 1

  const idList = characters.map(url => url.substring(lastSlashIndex))

  const locations = idList
    .reduce((locationList, id) => {
      !locationList.includes(locationsByCharacterId[id]) &&
        locationList.push(locationsByCharacterId[id])

      return locationList
    }, [])

  return {
    name: episode.name,
    episode: episode.episode,
    locations,
    locationsQuantity: locations.length,
    charactersQuantity: characters.length
  }
}

module.exports = getEpisodeLocations
