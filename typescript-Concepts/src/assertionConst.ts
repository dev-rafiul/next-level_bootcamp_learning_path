

// type UserRoles = "Admin" | "Editor" | "Viewer";

// enum UserRoles {
//     Admin = "Admin",
//     Editor = "Editor",
//     Viewer = "Viewer"
// }


const userRoles = {
    Admin: "ADMIN",
   Editor: "EDITOR",
    Viewer: "VIEWER",
} as const;





const canEdit = (role: (typeof userRoles) [keyof typeof userRoles]) => {
    if(role === userRoles.Admin || role === userRoles.Editor){
        return true;
    }
    else return false
}


const isEditPermissable = canEdit(userRoles.Admin)

