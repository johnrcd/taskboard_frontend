// i've seen a lot of random comments on StackOverflow saying stuff like

//     "localStorage unsafe"
//     "cookies unsafe"
//     "storing tokens unsafe dumb dumb"

// and it would probably improve the security of this application if i changed
// how i'm managing these tokens

// but, i'm also an idiot whose never done auth in the first place

// i think this solution is OK for this scale of application
// but i should probably look into better token management

export const setAccessToken = (token) => {
    localStorage.setItem("access_token", token);
};

export const getAccessToken = () => {
    return localStorage.getItem("access_token");
};