const getRegionsCloseToBerlin = (
    regionsByCountry,
    radiusInKm
) => {
    const berlinLocation = {
        longitude: 13.404616,
        latitude: 52.486081,
    }

    const kmInLongitudeDegree =
        111.32 *
        Math.cos(
            (berlinLocation.latitude / 180.0) * Math.PI
        )

    const deltaLat = radiusInKm / 111.1
    const deltaLong = radiusInKm / kmInLongitudeDegree

    const minLat = berlinLocation.latitude - deltaLat
    const maxLat = berlinLocation.latitude + deltaLat
    const minLong = berlinLocation.longitude - deltaLong
    const maxLong = berlinLocation.longitude + deltaLong

    const regionsCloseToBerlinWithDirect = Object.entries(
        regionsByCountry
    ).reduce(
        (
            countryWithRegions,
            [country, regionsInCountry]
        ) => {
            const regionsInCountryCloseToBerlin = regionsInCountry.filter(
                region => {
                    const {
                        longitude,
                        latitude,
                    } = region.location
                    const regionIsInsideLongitude =
                        longitude > minLong &&
                        longitude < maxLong
                    const regionIsInsideLatitude =
                        latitude > minLat &&
                        latitude < maxLat

                    return (
                        regionIsInsideLatitude &&
                        regionIsInsideLongitude
                    )
                }
            )
            if (regionsInCountryCloseToBerlin.length > 0) {
                countryWithRegions[
                    country
                ] = regionsInCountryCloseToBerlin
                return countryWithRegions
            } else {
                return countryWithRegions
            }
        },
        {}
    )

    return regionsCloseToBerlinWithDirect
}

export default getRegionsCloseToBerlin
