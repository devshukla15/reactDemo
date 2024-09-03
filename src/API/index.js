import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers : {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODcxNWE0MWVmNjk3NmUzZjljMjNkODg3MGMzN2IzOCIsIm5iZiI6MTcyNTI4ODM4My4zNDI2Nywic3ViIjoiNjZkNWNlNjgzZTFhYjQ1Y2U1YjFhYmY3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.uc5646TLDU05kAxH5e6JixaNAXeE-rOEA57gMM4lTR0'
    }
})
