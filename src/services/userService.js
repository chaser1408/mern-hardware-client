const userService = {
    login: async (credentials) => {
        try {
            const response = await fetch("https://api.example.com/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            });
            if (!response.ok) {
                throw new Error("Login failed");
            }
            const user = await response.json();
            return user;
        } catch (error) {
            throw new Error(error.message);
        }
    },
};

export default userService;
