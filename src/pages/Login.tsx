import { IonMenuButton, IonPage, IonHeader, IonToolbar, IonButtons, IonTitle, IonContent, IonButton, useIonRouter } from "@ionic/react";

const Login: React.FC = () => {
    const navigation = useIonRouter();

    const doLogin = () => {
        navigation.push('/app', 'forward', 'replace');
    }
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

                <IonButton expand="full" onClick={ () => doLogin()}>
                    Login
                </IonButton>


                
                </IonContent>
        </IonPage>
    );

}

export default Login;