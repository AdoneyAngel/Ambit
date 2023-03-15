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
            name: "Nombre de la guia",
            allowedUsers: ["user mail"],
            code: "abcdef",
            date: {
                day: "day",
                month: "month",
                year: "year",
                seconds: "total day seconds"
            },
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