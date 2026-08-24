import prisma from "./db";

export async function CreateTable(request: Request){
    const body  = await request.json();
    
    const newData = await prisma.user.create({
        data: {
            name: "sangram",
            email: "sangram@gmail.com"
        }
    })
}

//sorting
export async function GetTable(){
    const data = await prisma.user.findMany({orderBy:{email:"desc"}});
}


//filtering
export async function UpdateTable(){
    const users = await prisma.user.findMany({where: {name: "sangi"}});
}

//pagination
async () => {
    const users = await prisma.user.findMany({
        skip: 20,
        take: 10,
        
    })
}