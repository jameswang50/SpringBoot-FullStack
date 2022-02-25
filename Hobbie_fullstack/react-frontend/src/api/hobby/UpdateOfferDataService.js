import axios from '../customAxiosConfig/CustomAxiosConfig';

const UpdateOfferDataService = async (hobby) => {
  
  
 
      try {
       return await axios.post(`http://localhost:8080/hobbies/update-hobby`, hobby)
  
        } catch (err) {
          let error = '';
          if (err.response) {
              error += err.response;
            }
            return error;
        }

        // await axios.post(`http://localhost:8080/hobbies/update-hobby`, hobby)
        //   .then(res => {
          
        //     if (res.data != null) {
        //       window.location.href='/offer/'+ hobby.id; 
        //     }
        //   }).catch(err => {
        //     let error = '';
    
        //     if (err.response) {
        //       error += err.response;
        //     }
        //     return error;
        //   }));
};

export default UpdateOfferDataService;
