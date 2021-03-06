// import Memo from '../model'
import express from 'express'

interface MemoModel {
    title: string,
    description: string,
    background: string
}
// 메모 모델을 임시로 interface 처리 만약 DB 연결 모델이 도입되면 이 내용은 삭제 or 주석 처리

let router = express.Router();

let Memo: MemoModel[] = [
    {
        title: 'title1',
        description: 'description1',
        background: '#fff'
    },
    {
        title: 'title2',
        description: 'description2',
        background: '#fff'
    },
    {
        title: 'title3',
        description: 'description3',
        background: '#fff'
    }
]


/*
    GET METHOD TO SEND CLIENT (R of CRUD)
*/
router.get('/memos', (req, res) => {
    return res.json(Memo)
})

/*
    POST METHOD TO SEND CLIENT (C of CRUD)
*/
router.post('/memo', (req, res) => {
    console.log(req.body)
    Memo.push({ title: req.body.title, description: req.body.description, background: req.body.background })
    res.send(Memo)
})

/*
    DELETE METHOD TO SEND CLIENT (D of CRUD)
*/
router.delete('/memo', (req, res) => {
    console.log(req.body)
    Memo = Memo.filter(el => el.title !== req.body.title)
    res.send(Memo)
})

/*
    UPDATE METHOD TO SEND CLIENT (U of CRUD)
*/
router.put('/memo', (req, res) => {
    let post = req.body
    console.log(post)
    const title = post.title
    const description = post.description
    const background = post.background
    const idx = Memo.findIndex(el => el.title === title)
    Memo[idx].title = title;
    Memo[idx].description = description
    Memo[idx].background = background
    res.send(Memo)
})

export default router;