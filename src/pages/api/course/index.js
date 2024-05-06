import courseModel from "@/models/course";
import connectedToDb from "@/utils/db";

// Establish database connection outside of the request handler
connectedToDb();

const courseHandler = async (req, res) => {
  try {
    switch (req.method) {
      case "GET": {
        try {
          const getAll = await courseModel.find();
          return res.status(200).json({ data: getAll });
        } catch (error) {
          return res.status(500).json({
            message: "عملیات با مشکل مواجه شد لطفا مجددا تلاش کنید!",
            error,
          });
        }
      }
      case "POST": {
        const { title } = req.body;
        if (title && title.trim()) {
          try {
            await courseModel.create({ title });
            return res
              .status(201)
              .json({ message: "دوره با موفقیت ایجاد شد !" });
          } catch (error) {
            return res.status(500).json({
              message: "عملیات با مشکل مواجه شد لطفا مجددا تلاش کنید!",
              error,
            });
          }
        } else {
          return res.status(400).json({
            message: "عنوان دوره نمی تواند خالی باشد!",
          });
        }
    
      }
      default:
        return res.status(405).json({ message: "متد درخواست نامعتبر است!" });
    }
  } catch (error) {
    res.status(500).json({ message: "خطای سرور", error });
  }
};

export default courseHandler;
