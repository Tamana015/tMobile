import {StyleSheet } from 'react-native';
import { color } from '../../utils/color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingHorizontal: 40,
        backgroundColor: '#fff',
        alignItems: 'center',
      },
      profileImage: {
        marginTop: 50,
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
      },
      label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        alignSelf: 'flex-start',
      },
      input: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
      },
      groupMember: {
        fontSize: 14,
        marginVertical: 5,
      },
      groupMemberPhone: {
        fontSize: 12,
        color: '#666',
      },
      groupMemberContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: 10,
      },
      iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: color.magenta,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
      },
      iconText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
      },
      memberInfo: {
        flex: 1,
      },
      removeButton: {
        backgroundColor: color.magenta,
        borderRadius: 5,
        padding: 5,
      },
      removeButtonText: {
        color: '#fff',
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20,
      },
      closeButton: {
        position: 'absolute',
        top: 20,
        right: 20,
        zIndex: 1,
      },
      closeButtonText: {
        fontSize: 30,
        color: color.magenta,
      },
      profileTitle: {
        fontSize: 20,
        alignSelf: 'flex-start',
        marginTop: 5,
        color: color.magenta,
        fontWeight: 'bold',
      },
      inputContainer: {
        width: '100%',
        marginBottom: 15,
      },
      nameInputContainer: {
        position: 'relative',
        width: '100%',
      },
      editButton: {
        position: 'absolute',
        right: 10,
        top: 10,
      },
      editLink: {
        color: color.magenta,
        fontSize: 16,
      },
      editButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 10,
      },
      addButton: {
        marginTop: 20,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: color.magenta,
        justifyContent: 'center',
        alignItems: 'center',
      },
      addButtonText: {
        color: '#fff',
        fontSize: 30,
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
      },
      modalContent: {
        width: '80%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
      },
      modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
      },
      modalInput: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
      },
      modalButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
      },
      accountButtonContainer: {
        flexDirection: 'row',
        width: '100%',
      },
      modalButton: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:color.magenta,
      },
      modalButtonText: {
        color: 'white',
        fontSize: 16,
      },
      divider: {
        width: 1,
        height: '100%',
        backgroundColor: '#ccc',
      },
      membersContainer: {
        width: '100%',
        marginBottom: 20,
      },
});

export default styles;