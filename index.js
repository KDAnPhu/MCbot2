const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: 'svVanillaSMP.aternos.me',
    port: 57635,
    username: 'AFK_Bot', // ← đặt tên cố định hoặc thêm Math.random() nếu cần random
    version: '1.21.1'
  })

  bot.on('spawn', () => {
    console.log('✅ Bot đã vào server!')
    // bot.chat('/login <mật khẩu>') nếu cần login
  })

  bot.on('end', () => {
    console.log('🔁 Bot disconnect, reconnect sau 10s...')
    setTimeout(createBot, 10000)
  })

  bot.on('error', err => {
    console.log('❌ Lỗi:', err.message)
  })
}

createBot()
