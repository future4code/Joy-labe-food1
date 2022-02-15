export const goToHome = (navigate) => {
    navigate("/")
}

export const goToCartPage = (navigate) => {
    navigate("/cart")
}

export const goToEditAdressPage = (navigate) => {
    navigate("/edit-adress")
} 

export const goToEditProfilePage  = (navigate) => {
    navigate("/edit-profile")
}

export const goToErrorPage  = (navigate) => {
    navigate("/*")
}

export const goToLoginPage  = (navigate) => {
    navigate("/login")
}

export const goToProfilePage  = (navigate) => {
    navigate("/profile")
}

export const goToRegisterAdressPage  = (navigate) => {
    navigate("/register-adress")
}

export const goResultPage  = (navigate, id) => {
    navigate(`/result/${id}`)
}

export const goToSearchPage  = (navigate) => {
    navigate("/search")
}

export const goToSignUpPage  = (navigate) => {
    navigate("/sign-up")
}
