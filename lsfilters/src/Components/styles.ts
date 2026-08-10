import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  
  // Contenedor para meter la información de la app.
  appContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF4EC', 
  },

  //  AVATAR SELECTOR 

  avatarContainer: {
    alignItems: 'center',
    marginBottom: 40,
    width: "100%",
    overflow: "hidden",
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#FFD8BC',
  },

  avatarInner: {
    paddingHorizontal: 18,
    paddingVertical: 18,
    alignItems: 'center',
  },

  avatarList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 6,
  },

  avatarItem: {
    padding: 10,
    margin: 6,
    borderRadius: 30,
    backgroundColor: '#FFD8BC',
    borderWidth: 2,
    borderColor: 'transparent',
  },

  avatarSelected: {
    padding: 10,
    margin: 6,
    borderRadius: 30,
    borderWidth: 2,
    backgroundColor: '#FFC6A5', 
    borderColor: '#FF9F68', 
  },

  avatarEmoji: {
    fontSize: 30,
  },

  avatarTitleContainer: {
    width: '100%',
    backgroundColor: '#FFCFA4',
    paddingVertical: 10,
    alignItems: 'center',
    borderTopLeftRadius: 15,  
    borderTopRightRadius: 15,
  },

  avatarTitleText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
    textAlign: 'center',
  },

  // FORM

  formContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    width: '100%',
    borderWidth: 2,
    borderColor: '#FFD8BC',
    overflow: "hidden",
    marginBottom: 25,
  },

  formInner: {
    paddingHorizontal: 18,
    paddingVertical: 18,
  },

  label: {
    fontWeight: '800',
    color: '#FF9F68',
    marginBottom: 5,
    marginLeft: 3, 
  },

  labelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginRight: 2,
  },

  input: {
    borderWidth: 2,
    borderColor: '#FFD8BC',
    backgroundColor: '#FFF9F3',
    borderRadius: 10,
    padding: 10,
    width: '100%',
    color: '#000',
    textAlignVertical: 'top',
  },

  textarea: {
    height: 100,
  },

  button: {
    backgroundColor: '#FFB88A',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 15,
  },

  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },

  formTitleContainer: {
    width: '100%',
    backgroundColor: '#FFCFA4',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
  },

  formTitleText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
    textAlign: 'center',
  },

  charCount: {
    color: '#C07855',
    fontWeight: '700',
    fontSize: 12,
  },

  // PREVIEW PROFILE

  previewCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    width: '100%',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#FFDCC6',
    marginTop: 95,
    marginBottom: 40,
    paddingBottom: 10,
  },

  previewNickCapsule: {
    backgroundColor: '#FFE8D8',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    fontSize: 14,
    color: '#C07855',
    fontWeight: '600',
    marginBottom: 11,
  },

  previewAvatarContainer: {
    width: 130,       
    height: 130,
    borderRadius: 65,
    backgroundColor: '#FFE9D9',
    borderWidth: 1.5,
    borderColor: '#FFDCC6',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center', 
    marginTop: -65,
    marginBottom: 2,
    shadowOpacity: 0.10,
    shadowRadius: 8,
  },

  previewAvatar: {
    fontSize: 70,
    textAlign: 'center',
    marginBottom: 0,
    marginTop: 0,
  },

  previewName: {
    fontWeight: '700',
    fontSize: 22,
    color: '#FF9F68', 
    marginTop: 3,     
    marginBottom: 3,
    letterSpacing: 0.3,
  },

  previewDesc: {
    textAlign: 'center',
    color: '#6A4E3D',
    fontStyle: 'italic',
    fontSize: 15,
    paddingHorizontal: 20,
    marginBottom: 8,
  },


  // STYLES for the Filter Box
  imgFilter:{
    width: 70,
    height: 70,   
  },
  imgBox:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: '#FFCFA4',
    borderRadius: 25,
    backgroundColor: '#FFF9F3',

  },
  selected:{
    backgroundColor:'#FFC6A5',
    borderColor: '#FF9F68'
  }
});
