/*使用讀寫檔方法*/

//寫檔
FileOutputStream fos;
fos = new FileOutputStream("要儲存的檔案路徑加檔名");
PrintWriter pw = new PrintWriter(fos);
pw.println("測試文字存檔");
pw.println("可不可以");
pw.close();
fos.close();

//讀檔
FileReader fr = new FileReader("檔案的路徑加檔名");
//建立一個名稱為fr的FileReader物件，並且將檔案路徑及檔名傳入
BufferedReader bf = new BufferedReader(fr);
//建立一個名稱為br的BufferedReader物件，並且將fr傳入
String str = null;
String line = null;
while ((line=bf.readLine())!=null) {
    str=str+line;
}
//br.readLine()一次會讀一行，讀到檔案結束，line就會等於null
br.close();
fr.close();
//記得要將br及fr關掉
