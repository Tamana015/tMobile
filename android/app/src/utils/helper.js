export const getGreeting = (countryCode, userName) => {
    if (countryCode === '+91') {
      const hours = new Date().getHours();
      if (hours < 12) {
        return `Good Morning, ${userName}`;
      } else if (hours < 18) {
        return `Good Afternoon, ${userName}`;
      } else {
        return `Good Evening, ${userName}`;
      }
    }
    return `Hello, ${userName}`;
  };
  

  export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }) + ' at ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
  };