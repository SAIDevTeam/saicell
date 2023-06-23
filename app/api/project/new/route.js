
import { connectToDB } from "@utlis/db"
import Project from "@models/project";



export const POST = async(request)=>{

     connectToDB();
    
        const projectData = await request.json();
    
        try {
          const project = new Project(projectData);
          const savedProject = await project.save();
    
          return new Response( savedProject ,{
            status: 200
            
          });
        } catch (error) {
          console.error(error);
          return new Response( "Error saving the projectadat",{
            status: 422
            
          });
        }
      } 
      
        


