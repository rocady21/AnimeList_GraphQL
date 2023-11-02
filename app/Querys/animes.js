const { gql } = require("@apollo/client");

const OBTENER_ANIMES = gql`
query GetAnimeList($page: Int) {
    Page(page: $page, perPage: 1) {
      media {
        id
        idMal
        title {
          romaji
          english
          native
          userPreferred
        }
        type
        format
        status
        description
        startDate {
          year
          month
          day
        }
        endDate {
          year
          month
          day
        }
        season
        seasonYear
        seasonInt
        episodes
        duration
        chapters
        volumes
        countryOfOrigin
        isLicensed
        source
        hashtag
        trailer {
          id
        }
        updatedAt
        coverImage {
          extraLarge
          large
          medium
          color
        }
        bannerImage
        genres
        synonyms
        averageScore
        meanScore
        popularity
        isLocked
        trending
        favourites
        studios {
          edges {
            node {
              id
            name}
          }
        }
        
        tags {
          id
          name,
          category,
          
        }
        bannerImage
        
        relations {
          edges {
            id
            node {
              id
              title {
                romaji
                english
                native
                userPreferred
              }
            }
          }
        }
      }
    }
  }
`

const OBTENER_ANIME_ESPESIFICO = (id)=> {
    return gql`query GetAnimeList($page: Int) {
        Page(page: $page, perPage: 1) {
          media(id:${id}) {
            id
            idMal
            title {
              romaji
              english
              native
              userPreferred
            }
            type
            format
            status
            description
            startDate {
              year
              month
              day
            }
            endDate {
              year
              month
              day
            }
            season
            seasonYear
            seasonInt
            episodes
            duration
            chapters
            volumes
            countryOfOrigin
            isLicensed
            source
            hashtag
            trailer {
              id
            }
            updatedAt
            coverImage {
              extraLarge
              large
              medium
              color
            }
            bannerImage
            genres
            synonyms
            averageScore
            meanScore
            popularity
            isLocked
            trending
            favourites
            studios {
              edges {
                node {
                  id
                name}
              }
            }
            
            tags {
              id
              name,
              category,
              
            }
            bannerImage
            
            relations {
              edges {
                id
                node {
                  id
                  title {
                    romaji
                    english
                    native
                    userPreferred
                  }
                  coverImage{
                    medium
                  }
                }
              }
            }
          }
        }
      }`
} 



export {
    OBTENER_ANIMES,
    OBTENER_ANIME_ESPESIFICO
}