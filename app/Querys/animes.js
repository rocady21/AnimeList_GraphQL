const { gql } = require("@apollo/client");

const OBTENER_ANIMES = gql`
query GetAnimeList($page: Int) {
    Page(page: $page, perPage: 32) {
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
    return gql`query GetAnimeList($page: Int, $id:Int){
      Page(page: $page) {
          media(id:$id){
          id
          idMal
          title {
            romaji
            english
            native
            userPreferred
          }
          characters{
            edges{
              node{
                id,
                name {
                  first
                  middle
                  last
                  full
                  native
                  userPreferred
                },
                description,
                gender,
                age,
                image {
                  large
                }
                dateOfBirth {
                  year
                  month
                  day
                }
                modNotes
                siteUrl
              }
            }
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
                  large
                  color
                }
                status
                type
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