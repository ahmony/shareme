export interface FetchedUser {
    userName: string,
    image: string,
    _createdAt: string,
    _id: string,
    _rev: string,
    _type: string,
    _updatedAt: string
}

export interface SearchedPins {
    destination: string,
    image: {asset: {url: string}},
    postedBy: {image: string, userName: string, _id: string},
    save: [],
    _id: string
}   