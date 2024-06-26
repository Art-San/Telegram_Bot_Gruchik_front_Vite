const tg = window.Telegram.WebApp

export function useTelegram() {
  const onClose = () => {
    tg.close()
  }

  const onToggleButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
    }
  }

  return {
    onClose,
    onToggleButton,
    tg,
    username: tg.initDataUnsafe?.user?.username,
    telegramId: tg.initDataUnsafe?.user?.id,
    queryId: tg.initDataUnsafe?.query_id
  }
}
