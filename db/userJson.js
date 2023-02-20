user = {
    profile: {
        name: "Nombre de usuario",
        mail: "Correo de usuario",
        password: "contraseña de cuenta",
        avatar: "boolean"
    },
    joinedGuides: ["Guide Code"],
    guides: [
        {
            allowedUsers: ["user mail"],
            code: "abcdef",
            date: "last update date",
            private: "boolean",
            steps: [
                {
                    title: "Titulo del paso/step",
                    content: [
                        {
                            type: "tipo de contenido de este parrafo (text / image)",
                            vale: "contenido del parrafo (texto / referencia de imagen)"
                        }
                    ]
                }
            ]
        }

    ],
    config: {
        theme: "light"
    }

}