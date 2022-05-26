//--------------------------------creating without a callback first:--------------------------------
//procedural paradigm
const score = [8.2, 5.3, 4.2, 7.9, 6.3, 2.3]

const lowScores = []//array that will receive low scores
for (let i in score){
    if (score[i]<7){
        lowScores.push(score[i])
    }
}

console.log(lowScores)

//-----------------------------------Using callback------------------------------------------------------
//====OO paradigm

const lowScores2 = score.filter(function(lscore){
    return lscore < 7
})
console.log(lowScores2)

//another way
const Scoreslowerthan7 = lscore => lscore < 7
const lowScores3 = score.filter(Scoreslowerthan7)
console.log(lowScores3)
