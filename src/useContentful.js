import { createClient } from 'contentful'

const useContentful = () => {
    const client = createClient({
        space: "folxikxh0hat",
        accessToken: "zygMYXgTwIenUcjNKhK9_noPxAW-PYntvr1PVdEE-QQ",
        host: ""
    });

    const getMen = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "productItem",
                select: "fields"
            });

            const sanitize = entries.items.map((item) => {
                const avatar = item.fields;
                return {
                    ...item.fields,
                    avatar
                };
            });

            return sanitize;
            // return entries;
        } catch (error) {
            console.log('Error fetching Jeans: ${error} ');
  
        }
    };
    return{getMen}

    // const getWomen = async () => {
    //     try {
    //         const entries = await client.getEntries({
    //             content_type: "women",
    //             select: "fields"
    //         });

    //         const sanitize = entries.items.map((item) => {
    //             const avatar = item.fields;
    //             return {
    //                 ...item.fields,
    //                 avatar
    //             };
    //         });

    //         return sanitize;
    //         // return entries;
    //     } catch (error) {
    //         console.log('Error fetching Jeans: ${error} ');
  
    //     }
    //     return { getWomen }
    // };

    

};

export default useContentful