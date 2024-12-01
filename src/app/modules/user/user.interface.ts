

export type TUser = {
    id:string,
    password:string,
    needsPassword:boolean,
    status: 'in-progress' | 'blocked',
    role: 'student' | 'faculty' | 'admin',
    isDeleted: boolean
}