import { IonMenuButton, IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonTitle } from "@ionic/react";

const Menu: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonButtons>
                    <IonMenuButton>

                    </IonMenuButton>
                </IonButtons>
                <IonTitle>Template</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                </IonContent>
        </IonPage>
    );

}

export default Menu;