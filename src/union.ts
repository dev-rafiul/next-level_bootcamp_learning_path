type Userole = 'admin' | 'user' | 'guest';


const getDashboard = (role: Userole) => {
    if(role === 'admin'){
        return "admin Dashboard"
    }
}