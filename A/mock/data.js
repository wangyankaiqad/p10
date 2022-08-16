let demoList = {
    status: 200,
    message: 'success',
    routes: [
        {
            id: 1,
            path: "/students",
            title: "学生管理",
            icon: "el-icon-menu",
            name: "学生管理",
        },
        {
            id: 2,
            path: "/teacher",
            title: "教师管理",
            icon: "el-icon-document",
            name: "教师管理",
        },
        {
            id: 3,
            path: "/assistant",
            title: "助教管理",
            icon: "el-icon-document",
            name: "助教管理",
        }
    ],
}

export default {
    'get|/parameter/query/list': (option) => {
        return {
            status: 200,
            message: 'success',
            data: demoList
        }
    }
}