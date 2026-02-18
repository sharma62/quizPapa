
           # 🏆 Leaderboard Not Updating (Issue + Solution Plan)

## 📌 Current Issue
Currently, the **Leaderboard page is not updating** properly.

### ❌ Reason
Because the **database (DB) is not setup / connected**, so:

- Quiz results are not stored permanently
- Attempted users data is not saved
- Leaderboard cannot fetch updated user attempts

So leaderboard shows:
- empty data
- old data
- or static dummy data

---

# ✅ Correct Leaderboard Flow (Required Setup)

## 🎯 Goal
Leaderboard should show:

- All users who attempted the quiz
- Their score
- Their name/email
- Attempt date/time
- Rank based on score

---

# 🧠 Correct Working Logic

## Step 1: User Attempts Quiz
When user completes the quiz:

- Calculate score
- Store user details + score

Example result object:

```js
{
  name: "Rahul",
  email: "rahul@gmail.com",
  score: 8,
  total: 10,
  attemptedAt: "2026-02-18"
}
