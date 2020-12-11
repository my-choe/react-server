  
const express = require("express");
const router = express.Router();
const Board = require("../schemas/board");

// 글목록 조회 ======================================================================================================================
router.post("/getBoardList", async(req, res) => {
    try {
        const _id = req.body._id;
        const board = await Board.find({ writer: _id }, null, {
      sort: { createdAt: -1 }
    });
        res.json({ list: board });
    } catch (error) {
        console.log(error);
        res.json({ message: false });
    }
});

// 게시글 작성 ======================================================================================================================
router.post("/write", async (req, res) => {
    try {
      let obj;
  
      obj = {
        writer: req.body._id,
        title: req.body.title,
        content: req.body.content
      };
  
      const board = new Board(obj);
      await board.save();
      res.json({ message: "게시글이 업로드 되었습니다." });
    } catch (err) {
      console.log(err);
      res.json({ message: false });
    }
  });

  // 게시글 상세보기 ======================================================================================================================
router.post("/detail", async(req,res) => {
    try {
        const _id = req.body._id;
        const board = await Board.find({_id});
        res.json({ board });
    } catch (error) {
        console.log(err);
        res.json({ message: false });
    }
});

 // 게시글 업데이트 ======================================================================================================================
router.post("/update", async (req,res) => {
    try {
        await Board.update(
            {_id: req.body._id},
            {
                $set: {
                    title: req.body.title,
                    content: req.body.content
                }
            }
        );
        res.json({ message : "게시글이 수정되었습니다." })
    } catch (error) {
        console.log(error);
        res.json({ message: false });
    }
});

 // 게시글 삭제 ======================================================================================================================
 router.post("/delete", async(req,res) => {
     try {
         await Board.remove({
             _id: req.body._id
         })
         res.json({ message: true });
     } catch (error) {
         console.log(err);
         res.json({ message: false });
     }
 });

module.exports = router ;