const axios = require('axios');

const Searchnabi = (nabi) => {
   return new Promise( async (resolve, reject) => {
       await axios.get(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/kisahnabi/${nabi}.json`)
           .then(response => {
               if(response.status == 200){
                   const results = response.data

                   data = {}
                   data.code = response.status
                   data.message = "Mengoke"
                   data.nabi = {
                       nabi: results.name,
                       lahir: results.thn_kelahiran,
		       umur: results.usia,
		       tempat: results.tmp,
		       image: results.image_url,
		       kisah: results.description
                   }

                   data.creator = "MiKako ID"
                   console.log(results)
                   resolve(data)
               }else{
                   reject({
                       code: 500,
                       success: false,
                       message: "Servernya Lagi Nguli, Coba Lagi Nanti"
                   })
               }
           })
           .catch(err => {
               reject(err)
           })
   })
}

module.exports = Searchnabi
