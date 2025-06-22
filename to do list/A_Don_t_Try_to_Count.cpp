
#include <bits/stdc++.h>
using namespace std;

int main() {
	// your code goes here
	int t;
	cin>>t;
	while(t--){

        int n,m;
        cin>> n>>m;

        string x,s;
        cin>>x>>s;
      
        
        int ans=0;
        bool drg=true;
        while(x.size()<s.size()){
            x+=x;
            ans++;
        }
        // cout<<ans<<endl;
        
        for (int i = 0; i <2; i++)
        {
            int f=0;
            int ct=0,mxx=0,idx=0;
            for(int j=0;j<x.size();++j){
                
                f=j;ct=0;idx=0;
                while(true){
                if(x[f]==s[idx]){ct++;idx++;f++;}
                else {
                    break;
                }
                }
                
                
                mxx=max(ct,mxx);
                if(mxx>=s.size()){
                    cout<< ans <<endl;
                    drg=false;
                break;
            }
        }
            if(drg==false){
            break;
        }
            ans++;
            x+=x;
        

    }
        if(drg){
            cout<< -1 <<endl;
        }

       
 

}

}
