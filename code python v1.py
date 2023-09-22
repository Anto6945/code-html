import cv2

cap = cv2.VideoCapture(0)  # 0 représente la webcam par défaut

while True:
    ret, frame = cap.read()
    if not ret:
        break

    # Afficher le frame
    cv2.imshow('Webcam', frame)

    # Arrêtez la capture lorsque vous appuyez sur la touche 'q'
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Libérez la capture et fermez la fenêtre
cap.release()
cv2.destroyAllWindows()

#pip3 install sparse
