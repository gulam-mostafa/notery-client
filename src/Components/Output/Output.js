import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Output = () => {


    const { data: user = [], refetch } = useQuery({
        queryKey: ['selleruser'],
 
        queryFn: async () => {
            const res = await fetch(`https://notery-server.vercel.app/user`);
            const data = await res.json();
 
            return data;
 
        }
    })


console.log(user)






    return (
        <div className='w-10/12 m-auto'>
           {
            user? <div className='text-center'>Your data</div> :<div className='text-center'><button className="btn loading">loading</button></div>
           }
            {
                user?.map(userdata =>   <div className='grid lg:grid-cols-3 my-8 mx-auto text-xl border border-red-400 rounded text-center'>
                    <p>Name: {userdata?.account?.name}</p>
                    <p>Email: {userdata.account?.email}</p>
                    <p>Date: {userdata?.account?.date}</p>
                    <p>Location: {userdata?.account?.location}</p>
                    <p>Address: {userdata?.account?.propertyAdd}</p>
                    <p>Signature: {userdata?.account?.sign}</p>
                    <p>Singer: {userdata?.account?.singer}</p>
                    <p>witness: {userdata?.account?.witness}</p>
                    <p>Company email: {userdata?.account?.comEmail}</p>
                    <p>Session: {userdata?.account?.file}</p>
                    <p>company: {userdata?.account?.company}</p>
                    <p>Telephone: {userdata?.account?.telPhone}</p>
                    




                </div>)
            }
        </div>
    );
};

export default Output;