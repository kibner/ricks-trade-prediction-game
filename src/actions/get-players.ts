export async function get_players(search_query: string): Promise<string[]> {
    return new Promise((resolve, reject) => {
        if (search_query.indexOf('zion', 0) > -1) {
            resolve(['you found zion']);
        } else {
            reject('zion not found');
        }
    })
}