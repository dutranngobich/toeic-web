/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/Component/Profile/UserProfile.jsx",
    "./src/Component/Profile/ChangePassword.jsx",
    "./src/Component/Courses/Lessons/Comment/Comment.jsx",
    "./src/Component/Courses/Lessons/Comment/CommentItem.jsx",
    "./src/Component/Courses/Lessons/Report/ReportComment.jsx",
    "./src/Component/AdminComponent/CommentManage/CommentManage.jsx",
    "./src/Component/AdminComponent/CommentManage/ReportItem.jsx",
    "./src/Component/AdminComponent/CommentManage/CheckReport.jsx",
    "./src/Component/ProfessorComponent/VocabularyManage/AddVocabulary.jsx",
    "./src/Component/Chatbot/Chatbot.jsx",
    "./src/Component/Chatbot/ChatMessage.jsx",
  ],
  theme: {
    extend: {
      colors: {
        sub: "#70a2ab",
        primary: {
          50: "#F8FBFF",
          100: "#E5F0FF",
          200: "#B8D4FE",
          300: "#78A6EC",
          400: "#5690E7",
          500: "#347AE2",
          600: "#2B66BC",
          700: "#235197",
          800: "#1A3D71",
          900: "#02273f",
        },
        gray: {
          50: "#ECEFF4",
          100: "#E0E5ED",
          200: "#ABB7C9",
          300: "#96A0B5",
          400: "#7C829C",
          500: "#73778B",
          600: "#64748B",
          700: "#4C4F5F",
          800: "#343744",
          900: "#292C38",
        },
        white: "#FFFFFF",
        red: "#C85C54",
        yellow: "#FDB92C",
        purple: "#A55EFF",
        green: "#27AE60",
        "red-50": "#FFEFEB",
        "yellow-50": "#FDF4E0",
        "purple-50": "#F5EDFF",
      },
    },
  },
  plugins: [],
};